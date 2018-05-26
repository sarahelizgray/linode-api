import LinodeAPIWrapper from '../lib/index';

describe('LinodeAPIWrapper', () => {

  describe('minimum request requirements', () => {
    const request = new LinodeAPIWrapper('ABC1234').types;

    describe('config', () => {

      it('should exist', () => {
        expect(request).toHaveProperty('config');
      });

      it('should have default URL', () => {
        expect(request.config).toHaveProperty('url', 'https://api.linode.com/v4/types');
      });

      describe('headers', () => {
        it('should exist', () => {
          expect(request.config).toHaveProperty('headers');
        });

        it('should should have authorization header set', () => {
          expect(request.config.headers).toHaveProperty('authorization', 'Bearer ABC1234');
        });
      });
    });
  });

  describe('when overriding the URL', () => {
    const x = new LinodeAPIWrapper('ABC1234', 'https://api.linode.com/v5').types;

    describe('config', () => {
      it('should have URL set to new value', () => {
        expect(x.config).toHaveProperty('url', 'https://api.linode.com/v5/types');
      });
    });
  });

  describe('paginated request', () => {
    const L = new LinodeAPIWrapper('ABC123');

    describe('when page is set', () => {
      const request = L.types.page(5);

      describe('config', () => {
        describe('params', () => {
          it('should exist', () => {
            expect(request.config).toHaveProperty('params');
          });

          it('should have `page` set to provided value', () => {
            expect(request.config.params).toHaveProperty('page', 5);
          });

          it('should not have `page_size`', () => {
            expect(request.config.params).not.toHaveProperty('page_size');
          });
        });
      });
    });

    describe('when pageSize is set', () => {
      const request = L.types.pageSize(25);

      describe('config', () => {
        describe('params', () => {
          it('should exist', () => {
            expect(request.config).toHaveProperty('params');
          });

          it('should have `page_size` set to provided value', () => {
            expect(request.config.params).toHaveProperty('page_size', 25);
          });

          it('should not have `page`', () => {
            expect(request.config.params).not.toHaveProperty('page');
          });
        });
      });
    });

    describe('when page and pageSize are set', () => {
      const request = L.types
        .page(1)
        .pageSize(100);

      describe('config', () => {
        describe('params', () => {
          it('should exist', () => {
            expect(request.config).toHaveProperty('params');
          });

          it('should have `page` set to provided value', () => {
            expect(request.config.params).toHaveProperty('page', 1);
          });

          it('should have `page_size` set to provided value', () => {
            expect(request.config.params).toHaveProperty('page_size', 100);
          });
        });
      });
    });
  });
});
